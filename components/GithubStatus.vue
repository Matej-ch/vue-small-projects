<template>
  <div>
    <div class="center grid">
      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12" style="flex-direction: column;">
          <vs-button color="dark" @click="getStatus">
            Get status
          </vs-button>
        </vs-col>
        <vs-divider />

        <div v-show="currentStatus" style="width: 100%; text-align: center;">
          <div>
            {{ currentStatus }}
          </div>
          <vs-divider />
        </div>

        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12" style="flex-direction: column;" />
      </vs-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GithubStatus',
  data () {
    return {
      currentStatus: undefined
    }
  },
  created () {
    this.githubStatus()
  },
  methods: {
    async githubStatus () {
      this.$axios.setHeader('Access-Control-Allow-Origin', '*')
      await this.$axios({
        method: 'get',
        url: 'https://www.githubstatus.com',
        responseType: 'json'
      })
    },
    async getStatus () {
      const page = await this.$axios.$get('https://www.githubstatus.com/api/v2/status.json', {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
      this.currentStatus = page.status.description
    }
  }
}
</script>

<style scoped>

</style>
