<template>
  <div class="home" id="components-layout-demo-basic">
    <a-drawer
      title="设置面板"
      placement="right"
      width="400"
      :closable="true"
      v-model:open="visible"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-drawer>
    <a-modal v-model:visible="showModal" title="Title" @ok="handleOk">
      <p>发布成功</p>
    </a-modal>
    <a-layout>
      <a-layout-header class="header">
        <div class="logo" />
        <a-menu
          :selectable="false"
          theme="dark"
          mode="horizontal"
          :style="{ lineHeight: '64px', width: '350px' }"
        >
          <a-menu-item key="1">
            <a-button type="primary" @click="visible = true">预览和设置</a-button>
          </a-menu-item>
          <a-menu-item key="2">
            <a-button type="primary">保存</a-button>
          </a-menu-item>
          <a-menu-item key="3">
            <a-button type="primary" @click="showModal = true">发布</a-button>
          </a-menu-item>
        </a-menu>
      </a-layout-header>
    </a-layout>
    <a-layout>
      <a-layout-sider width="300" style="background: #fff">
        <div class="sidebar-container">
          <h2>组件面板</h2>
          <ComponentsList @on-item-click="onItemCreated"></ComponentsList>
          <!-- <div @click="onItemCreated('title')">
            <LTitle></LTitle>
          </div>
          <div @click="onItemCreated('l-link')">
            <l-link></l-link>
          </div> -->
        </div>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-layout-content class="preview-container">
          画布区域
          <ul class="preview-list">
            <li v-for="item in components" :key="item.id">
              <EditWrapper
                @edit="editProps"
                :active="currentIndex === item.id"
                :item-key="item.id"
                :props="item.props"
              >
                <component :is="item.name" v-bind="item.props" />
              </EditWrapper>
            </li>
          </ul>
        </a-layout-content>
      </a-layout>
      <a-layout-sider width="300" style="background: #fff">
        <a-tabs type="card">
          <a-tab-pane key="1" tab="属性设置">
            <div v-if="currentElement">
              <!-- <div class="sidebar-container">
                <PropsTable :props="currentElement.props" :type="currentElement.name"></PropsTable>
              </div> -->
              <div>
                <edit-group :props="currentElement.props"></edit-group>
              </div>
              <!-- <li v-for="(value, key) in currentElement.props" :key="key">
                {{ key }}:
                <component
                  v-if="mapPropsToComponents[key] === 'a-input'"
                  :is="mapPropsToComponents[key]"
                  :value="value"
                  @change="
                    (e) => {
                      updateValue(e, key)
                    }
                  "
                />
                <component
                  v-if="mapPropsToComponents[key] === 'a-input-number'"
                  :is="mapPropsToComponents[key]"
                  :value="parseInt(value)"
                  @change="
                    (e) => {
                      updateValueNumber(e, key)
                    }
                  "
                />
              </li> -->
            </div>
          </a-tab-pane>
          <a-tab-pane key="2" tab="功能设置"> Content of Tab Pand 2 </a-tab-pane>
        </a-tabs>
      </a-layout-sider>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, markRaw } from 'vue'
import { useGlobalDataStore } from '@/stores/globalData'
// import Title from '@/components/Title.vue'
import LText from '@/components/LText.vue'
// import LTitle from '@/components/LTitle.vue'
// import LLink from '@/components/LLink.vue'
import PropsTable from '@/components/PropsTable.vue'
import { clone } from 'lodash-es'
import mapPropsToComponents from '@/propsMap'
import componentsDefaultProps from '@/defaultProps'
import EditWrapper from '@/components/EditWrapper.vue'
import ComponentsList from '@/components/ComponentsList.vue'
// import ColorPicker from '@/components/ColorPicker.vue'
import EditGroup from '@/components/EditGroup.vue'

defineOptions({
  components: {
    // LTitle,
    // LLink,
    LText,
    PropsTable,
    EditWrapper,
    ComponentsList,
    // ColorPicker,
    EditGroup
  }
})

const globalData = useGlobalDataStore()
const visible = ref(false)
const showModal = ref(false)
const components = computed(() => globalData.components)
const currentIndex = computed(() => globalData.currentElement)
const currentElement = computed(() => globalData.getCurrentElement)
const handleOk = () => {
  showModal.value = false
}

const onItemCreated = (component: any) => {
  // console.log('props', props)
  globalData.addComponentToEditor({
    name: component.name,
    props: {
      ...component.props
    }
  })
}
const editProps = (index: string) => {
  globalData.editProps(index)
}
// const updateValue = (e: any, key: string) => {
//   globalData.updateValue({
//     key,
//     value: e.target.value
//   })
// }
// const updateValueNumber = (e: any, key: string) => {
//   globalData.updateValue({
//     key,
//     value: e
//   })
// }
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
}
.preview-container {
  padding: 24px;
  margin: 0;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.preview-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  position: relative;
  height: 600px;
  width: 320px;
  padding: 5px;
  border: 1px solid #efefef;
  background: #fff;
}
.sidebar-container {
  padding: 20px;
}
</style>
