const pageItemsType = {
    Slider: "Slider",
    UserLatestSeries: "UserLatestSeries",
    PostGroup: "PostGroup",
    LatestLivePost: "LatestLivePost",
    ExclusiveContent: "ExclusiveContent",
    UnknownDatePublishGroup: "UnknownDatePublishGroup",
    RecommendedMediaForUser: "RecommendedMediaForUser",
    Latest:"Latest",
    RecommendedMediasToMediaForUser: "RecommendedMediasToMediaForUser",
    Favorite: "Favorite",
    LatestEpisods: "LatestEpisods",
    Continuation: "Continuation",
    ExclusiveDubs: "ExclusiveDubs",
    StarGroup: "StarGroup",
    CategoryGroup: "CategoryGroup",
    BannerGroup: "BannerGroup",
}


export default {
    baseUrl : 'http://localhost:8080/',
    pageItemsType,
    itemTypes : {
        PurchasableMovie: 'PurchasableMovie',
        Series: 'Series',
        Movie: 'Movie',
    },
    sections : {
        [pageItemsType.Slider]: {
            url : '/api/v2.0/medias/sliders/{{SLIDER_ID}}',
        },
        [pageItemsType.PostGroup]: {
            url: 'api/v1.0/post-groups/{{PAYLOAD_KEY}}/medias',
            pi: 1,
            ps: 20,
        }
    }
}