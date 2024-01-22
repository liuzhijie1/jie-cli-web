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
        <h2>点击下列组件列表添加</h2>
        <div @click="onItemCreated">
          <Title></Title>
        </div>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '90vh' }"
        >
          预览区域
          <ul>
            <li v-for="(item, index) in components" :key="index">
              <div @click="editProps(index)">
                <component :is="item.name" v-bind="item.props" />
              </div>
            </li>
          </ul>
        </a-layout-content>
      </a-layout>
      <a-layout-sider width="300" style="background: #fff">
        <a-tabs type="card">
          <a-tab-pane key="1" tab="属性设置">
            <div v-if="currentElement">
              <PropsTable :props="currentElement.props"></PropsTable>
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
import Title, { defaultProps } from '@/components/Title.vue'
import PropsTable from '@/components/PropsTable.vue'
import { clone } from 'lodash-es'
import mapPropsToComponents from '@/propsMap'

const globalData = useGlobalDataStore()
const visible = ref(false)
const showModal = ref(false)
const components = computed(() => globalData.components)
const currentElement = computed(() => globalData.getCurrentElement)
const handleOk = () => {
  showModal.value = false
}
const onItemCreated = (type: string) => {
  globalData.addComponentToEditor({
    name: markRaw(Title),
    props: clone(defaultProps)
  })
}
const editProps = (index: number) => {
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
</style>
