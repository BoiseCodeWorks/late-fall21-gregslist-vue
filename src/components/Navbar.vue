<template>
  <nav class="bg-success p-3 h-100 d-flex flex-column">
    <router-link class="d-flex" :to="{ name: 'Home' }">
      <img class="img-fluid" alt="logo" src="../assets/img/GregsList.svg" />
    </router-link>
    <div class="d-flex flex-column justify-content-between flex-grow-1">
      <ul class="navbar-nav mt-5 w-100">
        <li class="d-flex flex-column">
          <router-link
            :to="{ name: 'Cars' }"
            class="btn selectable text-uppercase"
          >
            Cars
          </router-link>
          <router-link
            :to="{ name: 'Home' }"
            class="btn selectable text-uppercase"
          >
            Houses
          </router-link>
          <router-link
            :to="{ name: 'Home' }"
            class="btn selectable text-uppercase"
          >
            Jobs
          </router-link>
        </li>
      </ul>
      <span>
        <button
          class="btn selectable text-success lighten-30 text-uppercase my-1"
          @click="login"
          v-if="!user.isAuthenticated"
        >
          Login
        </button>

        <div class="my-1" v-else>
          <div
            class="dropdown-toggle selectable"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            id="authDropdown"
          >
            <img
              :src="account.picture"
              alt="user photo"
              height="40"
              class="rounded"
            />
          </div>
          <div
            class="dropdown-menu p-0 list-group"
            aria-labelledby="authDropdown"
          >
            <router-link :to="{ name: 'Account' }">
              <div class="list-group-item list-group-item-action hoverable">
                Manage Account
              </div>
            </router-link>
            <div
              class="
                list-group-item list-group-item-action
                hoverable
                text-danger
              "
              @click="logout"
            >
              <i class="mdi mdi-logout"></i>
              logout
            </div>
          </div>
        </div>
      </span>
    </div>
  </nav>
</template>

<script>
import { AuthService } from '../services/AuthService'
import { AppState } from '../AppState'
import { computed } from 'vue'
export default {
  setup() {
    return {
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style scoped>
.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}
.dropdown-menu.show {
  transform: scale(1);
}
.hoverable {
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}
.nav-link {
  text-transform: uppercase;
}
.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-light);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
