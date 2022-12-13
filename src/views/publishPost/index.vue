<template>
  <h3>Love from wuhan</h3>
  <a-form :model="form" :style="{ minWidth: '600px',width: '100%' }" @submit="handleSubmit">
    <a-form-item
      :validate-trigger="['change', 'input']"
      :rules="[{ required: true, message: '标题不能为空' }]"
      field="title"
      label="标题"
    >
      <a-input v-model="form.title" placeholder="请输入标题"></a-input>
    </a-form-item>
    <a-form-item
      :validate-trigger="['change', 'input']"
      :rules="[{ required: true, message: '内容不能为空' }]"
      field="content"
      label="正文"
    >
      <a-textarea
        field="title"
        label="标题"
        v-model="form.content"
        placeholder="请输入正文"
        allow-clear
        :auto-size="{
          minRows: 3,
          maxRows: 6,
        }"
      />
    </a-form-item>
    <a-form-item>
      <a-button html-type="submit">提交</a-button>
    </a-form-item>
  </a-form>
</template>
<script setup>
const baseUrl = "https://api.day.app/5ZvhYJp6GwD6VJXmHWZYMj/";
const form = reactive({
  title: "",
  content: "",
});
const handleSubmit = ({_,errors}) => {
  if(errors) return
  const url = `${baseUrl}${form.title}/${form.content}`;
  fetch(url);
  form.title = ''
  form.content = ''
};
</script>
