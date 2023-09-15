<template>
  <f7-app v-bind="f7Params">
<!--    <div v-if="isIos" style="width: 100%; height: 50px; background: rgb(239 239 244);"></div>-->
    <f7-panel left floating resizable>
      <f7-view url="/panel-left/" links-view=".view-main"></f7-view>
    </f7-panel>
    <f7-panel right floating resizable>
      <f7-view url="/panel-right/"></f7-view>
    </f7-panel>
    <f7-view
        url="/"
        :main="true"
        class="safe-areas"
        :master-detail-breakpoint="768"
        :browser-history="needsBrowserHistory"
        :browser-history-separator="''"
        :preload-previous-page="!needsBrowserHistory"
        :ios-swipe-back="!needsBrowserHistory"

    ></f7-view>

  </f7-app>
</template>

<script lang="ts">
import { f7App, f7Panel, f7View } from 'framework7-vue';
import routes from './routes';
import store from './store';
import {Capacitor} from "@capacitor/core";
import {App} from '@capacitor/app'

export default {
  components: {
    f7App,
    f7Panel,
    f7View,
  },
  data() {
    // Demo Theme
    let theme = 'auto';
    if (document.location.search.indexOf('theme=') >= 0) {
      theme = document.location.search.split('theme=')[1].split('&')[0];
    }
    const platform = Capacitor.getPlatform()
    const needsBrowserHistory = platform !== 'ios'

    if (platform === 'ios') {
      const html = document.documentElement;
      if (html) {
        html.style.setProperty('--f7-safe-area-top', '44px');
        html.style.setProperty('--f7-safe-area-bottom', '34px');
      }
    }

    return {
      needsBrowserHistory,
      isIos: Capacitor.getPlatform() === 'ios',
      f7Params: {
        theme,
        routes,
        store,
        popup: {
          closeOnEscape: true,
        },
        sheet: {
          closeOnEscape: true,
        },
        popover: {
          closeOnEscape: true,
        },
        actions: {
          closeOnEscape: true,
        },
      },
    };
  },
  mounted() {
    // App.addListener("backButton", (canGoBack) => {
    //   if (canGoBack) {
    //
    //   }
    // })
  }
};
</script>
