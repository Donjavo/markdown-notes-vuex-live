<template>
  <div v-if="activeNote" class=" h-full | flex flex-col">
      <!-- editing -->
    <div class="flex-1 flex">
      <section class=" flex-1">
        <textarea
          :value="activeNote.body"
          @input="updateNote"
          class="w-full h-full p-3 bg-gray-200"
        >
        </textarea>
      </section>
      <article class=" p-3 bg-gray-900 flex-1 text-white">
        HTML will be here
      </article>
    </div>
    <!-- note info and actons -->
    <section class="mt-3 | flex justify-end ">
        <a href="closeNote" class=" bg-gray-200 py-1 px-3 rounded-md">Close note</a>
    </section>
  </div>
  <div v-else class="h-full | flex justify-center items-center">
    Please select a note to start editing
  </div>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'ActiveNote',
  setup () {
    const store = useStore()
    const activeNote = computed(() =>
      store.state.activeNote
        ? store.getters.getNoteById(store.state.activeNote)
        : null
    )
    const updateNote = $event =>
      store.commit('updateNote', {
        id: activeNote.value.id,
        body: $event.target.value
      })
    const closeNote = () => store.commit('setActiveNote')
    return {
      activeNote,
      updateNote,
      closeNote
    }
  }
}
</script>
