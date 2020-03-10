<template>
  <main id="main" class="container">
    <h1>Welcome to Feathers</h1>
    <form class="form" v-on:submit.prevent="sendMessage">
      <input
        type="text"
        v-model="messageInput"
        id="message-text"
        placeholder="Enter message here"
      />
      <button type="submit" class="button button-primary">Send message</button>
    </form>

    <h2>Here are the current messages:</h2>
    <p v-for="message in messages" :key="message.id">{{message.text}}</p>
  </main>
</template>

<script>
import app from "./app";

export default {
    data(){
        return {
            messageInput:'',
            messages: []
        }
    },
    methods: {
        addMessage(message) {
            this.messages.push(message);
        },
        async sendMessage() {
            await app.service('models/message').create({
                text: this.messageInput
            });

            this.messageInput = '';
        },
        async init() {
            this.messages = await app.service('models/message').find();
        }
    },
    mounted() {
        this.init();

        app.service('models/message').on('created', this.addMessage);
    }
}
</script>
