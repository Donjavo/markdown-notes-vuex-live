<template>
  <div class=" container | min-h-1/2 p-3 my-3 mx-auto | bg-white rounded-xl shadow-2xl | flex">
    <!-- left side -->
    <section class=" w-1/4 p-3 mr-3 | bg-gray-100">
    <!-- search-notes -->
    <p>Search Notes</p>
    <!-- Notes-List-->
    <note-list />
    </section>
    <!-- right side -->
    <section class=" p-3 | flex-grow">
      <!-- Active Note -->
      <active-note />
    </section>
  </div>
</template>

<script>
import ActiveNote from './components/ActiveNote.vue'
import NoteList from './components/NoteList.vue'
export default {
  name: 'App',
  components: {
    NoteList,
    ActiveNote
  }
}
</script>
<style>
.dev {
  border: 1px solid red;
}
</style>
