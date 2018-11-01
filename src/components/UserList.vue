<template>
  <section class="section">
    <h1 class="title has-text-centered">User List</h1>
    <div class="container">
      <filter-bar @do-filter="onFilterSet" @on-filter-reset="onFilterReset"></filter-bar>
      <div class="field">
        <label>Per Page:</label>
        <select class="ui simple dropdown" v-model="perpage">
          <option value=10>10</option>
          <option value=15>15</option>
          <option value=20>20</option>
          <option value=25>25</option>
          </select>
      </div>
      <vuetable ref="vuetable" :multi-sort="true" :show-sort-icons="true" :append-params="moreParams" :per-page= parseInt(perpage) :css="{tableWrapper: '',
      tableHeaderClass: 'fixed',
      tableBodyClass: 'vuetable-semantic-no-top fixed',
      tableClass: 'ui blue selectable unstackable celled table',
      loadingClass: 'loading',
      ascendingIcon: 'blue chevron up icon',
      descendingIcon: 'blue chevron down icon',
      ascendingClass: 'sorted-asc',
      descendingClass: 'sorted-desc',
      sortableIcon: 'grey sort icon',
      handleIcon: 'grey sidebar icon',}" api-url="https://vuetable.ratiw.net/api/users" 
      :fields="[{ name: '__sequence',   // <----
                  title: '#',
                  titleClass: 'center aligned',
                  dataClass: 'right aligned'
                },
                {name:'name',sortField: 'name'}, { name: 'email',sortField: 'email'}, 
                'birthdate', { name: 'address.line1', title: 'Address 1' } , 
                'address.line2', 'address.zipcode',{ name: 'gender', titleClass: 'center aligned',
                   dataClass: 'center aligned',
                   callback: 'genderLabel'
                },
                { name: '__component:custom-actions',
                  title: 'Actions',
                  titleClass: 'center aligned',
                  dataClass: 'center aligned'
                }]" pagination-path="" @vuetable:pagination-data="onPaginationData"></vuetable>
      <div class="vuetable-pagination ui basic segment grid">
        <vuetable-pagination-info ref="paginationInfo"></vuetable-pagination-info>
        <vuetable-pagination ref="pagination" @vuetable-pagination:change-page="onChangePage"></vuetable-pagination>
      </div>
    </div>
    <!-- <div class="columns">
        <div class="column">
           <div v-for="(user,index) in users" :key="index" >
              <li>Name-{{user.name}}, phone-{{user.phone}}</li>
            </div>
        </div>
        <div class="column">
           <create-user-profile> </create-user-profile>
        </div>
      </div> -->
  </section>
</template>

<script>
  import Vue from 'vue'
  import Firebase from 'firebase'
  import CreateUserProfile from '../components/CreateUserProfile.vue'
  import Vuetable from 'vuetable-2/src/components/Vuetable'
  import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
  import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo'
  import CustomActions from './CustomActions'
  import FilterBar from './FilterBar'
  
  Vue.component('filter-bar', FilterBar)
  Vue.component('custom-actions', CustomActions)
  export default {
    computed: {
      moreParams() {
        // console.log(this.$store.getters.getFilter)
        return this.$store.getters.getFilter
      }
    },
    data: function() {
      return {
        users: [],
        perpage: 10
      }
    },
    watch: {
      perpage: function(val) {
        this.perpage = val
        Vue.nextTick(() => this.$refs.vuetable.refresh())
      }
    },
    components: {
      CreateUserProfile,
      Vuetable,
      VuetablePagination,
      VuetablePaginationInfo,
      // CustomActions
    },
    methods: {
      //...
      genderLabel(value) {
        return value === 'M' ?
          '<span class="ui teal label"><i class="large man icon"></i>Male</span>' :
          '<span class="ui pink label"><i class="large woman icon"></i>Female</span>'
      },
      onChangePage(page) {
        this.$refs.vuetable.changePage(page)
      },
      onPaginationData(paginationData) {
        this.$refs.pagination.setPaginationData(paginationData)
        this.$refs.paginationInfo.setPaginationData(paginationData) // <----
      },
      onFilterSet(filterText) {
        // console.log("on filter set")
        this.$store.dispatch('setFilterParam', filterText)
        Vue.nextTick(() => this.$refs.vuetable.refresh())
      },
      onFilterReset() {
        delete this.$store.dispatch('resetFilter')
        Vue.nextTick(() => this.$refs.vuetable.refresh())
      }
    },
    created() {
      Firebase.firestore().collection('Users').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.users.push(doc.data())
          // console.log(querySnapshot.docs.map(x=> x.data))
        })
      })
    }
  }
</script>
