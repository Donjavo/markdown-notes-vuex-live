<template>
      <div>
          <note-list-item v-for="note in notes" :key="note.id" :note="note" />
      </div>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import NoteListItem from './NoteListItem.vue'
export default {
  components: { NoteListItem },
  name: 'NoteList',
  setup () {
    const store = useStore()
    // const notes = computed(() => store.state.notes)
    return { notes: computed(() => store.state.notes) }
  }
}
</script>
