<template>
  <div>
    <p>news</p>
    <button class="btn btn-primary">Button</button>

  </div>

</template>

<script>
export default {
  name: 'News',
  data() {
    return {}
  },
  mounted() {},
  methods: {
    async getNews(query, count) {
      const options = {
        method: 'GET',
        url: 'https://bing-news-search1.p.rapidapi.com/news/search',
        params: {
          q: query,
          count,
          freshness: 'Day',
          textFormat: 'Raw',
          safeSearch: 'Off'
        },
        headers: {
          'content-type': 'application/octet-stream',
          'X-BingApis-SDK': 'true',
          'X-RapidAPI-Key': '90299487cbmshca2dd4de554b238p144172jsn09b4559ed536',
          'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
        }
      }

      try {
        const response = await axios.request(options)
        console.log(response.data)
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style>
</style>