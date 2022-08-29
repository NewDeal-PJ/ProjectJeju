<template>
<div></div>
</template>

<script>
export default {
    async mounted () {
        try {
            if (!this.$route.query.code) {
                return this.$router.push('/')
            }
            console.log(`code : ${this.$route.query.code}`)
        } catch (error) {
            console.log(error)
        }
    }
}
</script>