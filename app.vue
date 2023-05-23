<template>
  <nav class="flex items-center justify-between flex-wrap p-6 border rounded">
    <div class="flex items-center flex-shrink-0 mr-6">
      <h1 class="text-2xl font-bold">My Notes</h1>
    </div>
    <div class="flex items-center flex-shrink-0 mr-6">
        <input type="text" class="border-black-300 rounded-lg focus:outline-none" placeholder="Search">
    </div>
  </nav>

  <!-- <div class="grid grid-cols-2 gap-4">
    <div v-for="note in notes" class="w-1/2 p-4">
      <div class="relative bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-xl font-bold mb-4">{{ note.title }}</h2>
        <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis libero et justo consectetur, at placerat lorem tincidunt.</p>
        <button class="absolute top-0 right-0 mt-2 mr-2 text-gray-600 hover:text-red-500" onclick="deleteCard()">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  </div> -->
  <div class="relative m-4 z-50">
    <button @click="showModal = true" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Create
    </button>
    
  </div>
  <div class="grid grid-cols-2 gap-4">
    <div class="p-4" v-for="note in notes">
      <div class="bg-white rounded-lg shadow-lg p-6 relative">
        <h2 class="text-xl font-bold mb-4">{{ note.title }}</h2>
        <p class="text-gray-600">{{ note.description }}</p>
        <button class="absolute top-0 right-10 mt-2 mr-2 text-gray-600 hover:text-red-500">
          edit
        </button>
        <button class="absolute top-0 right-0 mt-2 mr-2 text-gray-600 hover:text-red-500">
          X
        </button>
      </div>
    </div>
  </div>
  <div class="fixed z-10 overflow-y-auto top-0 w-full left-0" v-if="showModal">
    <div class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-900 opacity-75" />
      </div>
      <span class="sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
      <div class="inline-block align-center bg-white rounded-lg text-left overflow shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <label>Name</label>
          <input type="text" class="w-full bg-gray-100 p-2 mt-2 mb-3" />
          <label>Url</label>
          <input type="text" class="w-full bg-gray-100 p-2 mt-2 mb-3" />
        </div>
        <div class="bg-gray-200 px-4 py-3 text-right">
          <button type="button" class="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2" onclick="showModal = false"><i class="fas fa-times"></i> Cancel</button>
          <button type="button" class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"><i class="fas fa-plus"></i> Create</button>
        </div>
      </div>
    </div>
  </div>
<!-- <VueAwesomePaginate :total-items="200" /> -->
<vue-awesome-paginate
    :total-items="50"
    :items-per-page="5"
    :max-pages-shown="5"
    v-model="currentPage"
    :on-click="onClickHandler"
  />
</template>
<script setup>
  import { ref } from "vue";
  const onClickHandler = (page) => {
    console.log(page);
  };
  let showModal = false 
  const currentPage = ref(1);
  const { data: datas } = await useFetch('http://localhost:8000/note')
  const notes = toRaw(datas.value).data
   
  const editNotes = () => {

  }
  const deleteNotes = () => {

  }
  const searchNotes = () => {

  }
</script>

<style>
  .pagination-container {
    display: flex;
    column-gap: 10px;
  }
  .paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    border: 1px solid rgb(217, 217, 217);
    color: black;
  }
  .paginate-buttons:hover {
    background-color: #d8d8d8;
  }
  .active-page {
    background-color: #3498db;
    border: 1px solid #3498db;
    color: white;
  }
  .active-page:hover {
    background-color: #2988c8;
  }
</style>
