<template>
  <div>
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
      <!--Start of items table-->
      <div class="results-table" v-if="items">
        <div class="table-container">
          <table class="table is-bordered is-striped is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>ID</th>
                <th>Avatar</th>
                <th>User Name</th>
                <!-- <th>Email</th>
                <th>Public Repos</th>
                <th>Location</th>
                <th>Created</th>
                <th>Updated</th> -->
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items" v-bind:key="item.id">
                <td>{{ item.id }}</td>
                <td><img v-bind:src="item.avatar_url" /></td>
                <td>{{ item.login }}</td>
                <!-- <td>{{ item.email }}</td>
                <td>{{ item.public_repos }}</td>
                <td>{{ item.location }}</td>
                <td>{{ item.created_at }}</td>
                <td>{{ item.updated_at }}</td> -->
                <td><a v-bind:href="item.html_url" target="_blank" rel="noopener" class="btn btn-primary">Github Page</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!--End of items table -->
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
      fetch("https://api.github.com/search/users?q=" + q + "in:nameORin:email type:user&per_page=15")
        .then((response) => response.json())
        .then((data) => (this.items = data.items));

    },
  },
};
</script>

<style>
:root {
    --container-color: rgb(30, 42,71);
    --stats-bg: rgb(20, 29,47);
    --text-color: rgb(255, 255, 255);
    --accent-text-color: rgb(0, 121, 255);
    --btn-color: rgb(0, 121, 255);
}

body, html {
  height: 100%;
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

.table > thead > tr > th {
  color: #fff;
  padding-bottom: 10px;
  background-color: ##000;
}

tbody > tr > td {
color: #fff;
}

 tbody > tr > td > img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 50px;
  max-height: 50px;
 }


</style>
