<template>
  <div class="userSearch">
    <div>
      <!--Start of searchbar-->
      <form
        v-on:submit.prevent="queryGithub(query)"
        class="row search-bar bg-pblue"
      >
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <h2 class="form-title">Find a <strong>Github User</strong></h2>
            </div>
            <div class="col-md-8">
              <div class="input-group">
                <input type="search" v-model="query" class="form-control" />
                <span class="input-group-addon"
                  ><input type="submit" value="Search" class="btn btn-primary"
                /></span>
              </div>
            </div>
          </div>
        </div>
      </form>
      <!--End of searchbar-->
      <!--Start of items TABLE-->
      <div class="items" v-if="items">
        <div class="table-container">
          <table class="table is-bordered is-striped is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>ID</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Public Repos</th>
                <th>Location</th>
                <th>Created</th>
                <th>Updated</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items" v-bind:key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.login }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.public_repos }}</td>
                <td>{{ item.location }}</td>
                <td>{{ item.created_at }}</td>
                <td>{{ item.updated_at }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>Total Results: {{items.total_count}}</div>
      <div>{{ items }}</div>
      <!--End of items TABLE -->
    </div>
  </div>
</template>

<script>
export default {
  name: "UserSearch",
  data() {
    return {
      msg: "User FrontEnd Search",
      query: '',
      items: '',
    };
  },
  methods: {
    queryGithub(q) {
      fetch("https://api.github.com/search/users?q=" + q + "in:name type:user")
        .then((response) => response.json())
        .then((data) => (this.items = data));
    },
  },
};
</script>

<style>
/* BODY GRADIENT */
body {
  background-image: linear-gradient(to right top, #d91b23, #124feb);
  height: 110vh;
}
/* SEARCH BAR*/
.search-bar {
  margin: 0;
  padding: 206px 0;
}

.search-bar .form-title {
  margin-top: 0;
  margin-bottom: 2px;
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-weight: 100;
}

.search-bar .input-group {
  -webkit-box-shadow: 0px 4px 18px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 18px 0px rgba(0, 0, 0, 0.1);
}

.search-bar .input-group-addon {
  border: none;
}

.search-bar .form-title strong {
  display: block;
}

.search-bar .form-control {
  height: 60px;
  border-radius: 0;
  border: none;
}

.search-bar .form-control:focus {
  box-shadow: 0px 0px 0px 0px #ffffff !important;
}

.input-group .input-group-addon [type="submit"],
.input-group .input-group-addon button {
  border: none;
  border-radius: 0;
}

.search-bar .btn {
  padding: 0 54px;
  line-height: 60px;
}

.btn-primary {
  padding: 0 28px;
  line-height: 54px;
  background: #ff6726;
  color: #fff;
}

.btn-primary:hover {
  color: #fff;
  background-color: #286090;
  border-color: #204d74;
}

.search-bar .input-group + p {
  color: #fff;
  font-size: 15px;
  font-family: "Poppins", sans-serif;
  font-weight: 100;
  margin-top: 15px;
  margin-bottom: 0;
}

.search-bar .input-group + p strong {
  margin-right: 40px;
}

</style>
