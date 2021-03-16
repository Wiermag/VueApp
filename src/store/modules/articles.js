import axios from "axios"

const state = {
    articleReviews: {}
};

const getters = {
    allArticleReviews: state => state.articleReviews,
};

const actions = {
    async getArticleReviews({commit}) {
        const response = await axios.get(`https://restcountries.eu/rest/v2/all`);
        commit("setArticleReviews", response.data)
    }
};

const mutations = {
    setArticleReviews:(state, response) => {
        state.articleReviews = response
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
}
