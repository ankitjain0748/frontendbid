import { Component } from 'react';
import Api from '../Apis/Api';
class Listing extends Component {

    async Login(data) {
        return Api.post("/login", data);
    }

    async Profile(data) {
        return Api.post("/update-profile", data)
    }


    async Password(data) {
        return Api.post("/change-password", data)
    }

    async Subscription(data) {
        return Api.post("/create-subscription", data)
    }

    async Subscriptionlist() {
        return Api.get("/get-subscription-list")
    }

    async Scheduledate(data) {
        return Api.post("/create-story", data)
    }

    async Reschedule(id, data) {
        return Api.post(`/reschedule-story/${id}`, data)
    }
    async Static() {
        return Api.get("/statistics")
    }

    async StoryCard(type, query,page) {
        return Api.get(`/story-list/${type}?${query}&page=${page}`,)
    }

    async Storydetilas(uuid) {
        return Api.get(`/story-detail/${uuid}`)
    }

    async storydelete(uuid) {
        return Api.get(`/delete-story/${uuid}`)
    }
    async storyreshedule(uuid, data) {
        return Api.post(`/reschedule-story/${uuid}`, data)
    }
    async saveimage(data) {
        return Api.post(`/save-image`, data)
    }

    async getdetilas(){
        return Api.get("/get-detail")
    }


    async fetchKey(){
        return Api.get("/fetch-api-key")
    }


    async StoryLogout() {
        return Api.get("/admin-logout")
    }

    async getchart(){
        return Api.get("/get-data-bymonth")
    }

    async forget(data){
        return Api.post("/forgot-password-admin",data)
    }

    async forgetopt(data){
        return Api.post("/verify-reset-password-otp",data)
    }

    async forgetpass(data){
        return Api.post("/reset-password",data)
    }

    async update_ai_keys(data){
        return Api.post(`/update-key`, data)
    }

    
    render() {
        return (
            <div>
                <>

                </>
            </div>
        )
    }
}

export default Listing;