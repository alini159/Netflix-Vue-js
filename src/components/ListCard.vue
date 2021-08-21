<template>
<v-card
    class="mx-auto list-card"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="Overline mb-4">
            {{ listTitle }}
        </div>
      </v-list-item-content>
    </v-list-item>
    <v-card-text>
      <v-list>
        <v-list-item-group>
          <template v-for="(item, index) in allTasks">
            <list-item :item="item" :key="item.id" />
            <v-divider
              v-if="index < allTasks.length - 1"
              :key="index"
            ></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
    </v-card-text>
    <v-card-actions>
       <v-text-field 
        v-model="newTask"
        label="Adicionar tarefa"
        append-icon="mdi-plus-circle"
        @click:append="addItem"
      />
    </v-card-actions>
  </v-card>
</template>

<script>
import ListItem from '@/components/ListItem.vue';
export default {
 name: 'ListCard', 
 props: {
    listItem: Object,
 },
  components: {
    ListItem
  },
 data(){
     return{
         selected: [],
         list: this.listItem,
         newTask: ''

     };
 },
 computed:{
     listTitle() {
         if(this.list){
             return this.list.title;
         }
         return '';
     },
     allTasks(){
       if(this.list && this.list.tasks){
         return this.list.tasks.items;
       }
       return [];
      }
     },
     methods:{
       addItem(){
        var item = {
          status:'needsActions',
          title: this.newTask,
          taskslistId: this.list.id
        }
        this.$emit('addTasks', item)
     }
   }
}
</script>
  <style lang="scss">
  .list-card {
    .v-list-item__content {
      padding: 0;
    }
    .v-list-item-group .v-list-item {
      padding: 0;
   }
}
</style>