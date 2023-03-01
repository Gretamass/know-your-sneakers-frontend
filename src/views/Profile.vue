<template>
  <div class="profile-page-container">
    <div class="sidebar">
      <div class="setting-section" @click="openSettingsTab('all-settings')">
        Nustatymai
      </div>
      <div class="setting-subcategories-names">
        <span @click="openSettingsTab('account')">Paskyra</span>
        <span @click="openSettingsTab('notifications')">Pranešimai</span>
        <span @click="openSettingsTab('privacy')">Privatumas</span>
        <span @click="openSettingsTab('help')">Pagalba</span>
      </div>
      <div class="setting-section" @click="openSettingsTab('wishlist')">
        Norų sąrašas
      </div>
      <div class="setting-section" @click="openSettingsTab('products')">
        Produktai
      </div>
      <div class="setting-section" @click="openSettingsTab('articles')">
        Tinklaraščiai
      </div>
      <div class="setting-section" @click="openSettingsTab('providers')">
        Tiekėjai
      </div>
    </div>
    <div class="main-settings-container">
      <AccountSettings
        v-if="selectedSettingsTab === 'account'"
      ></AccountSettings>
      <ProductSettings
        v-if="selectedSettingsTab === 'products'"
      ></ProductSettings>
    </div>
  </div>
</template>

<script>
import AccountSettings from "@/components/settings/AccountSettings.vue";
import ProductSettings from "@/components/settings/ProductSettings.vue";

export default {
  name: "Profile-item",
  data() {
    return {
      selectedSettingsTab: "",
    };
  },
  components: { ProductSettings, AccountSettings },
  methods: {
    openSettingsTab(selectedTab) {
      this.selectedSettingsTab = selectedTab;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/_variables.scss";
.profile-page-container {
  display: flex;
  flex-direction: row;
  //max-width: 1550px;
  width: 100%;
  margin-top: 100px;

  .sidebar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 100px 0 100px 150px;
    flex: 1;

    background-color: #37393a;
    z-index: -1;
    color: $light-grey;
    font-family: "Kumbh Sans";
    .setting-section {
      font-size: 28px;
      font-weight: 500;
      margin: 20px 0;
    }
    .setting-subcategories-names {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      span {
        font-size: 21px;
        margin-bottom: 20px;
      }
    }
  }

  .main-settings-container {
    display: flex;
    flex-direction: column;
    flex: 3;
  }
}
</style>
