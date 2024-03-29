import http from "../http-common";

class VideoDataService {
  getAll() {
    return http.get("/videos");
  }

  getUltraWide() {
    return http.get("/videos/ultrawide");
  }

  getQHD() {
    return http.get("/videos/qhd");
  }

  getUHD() {
    return http.get("/videos/uhd");
  }

  /* get(id) {
    return http.get(`/videos/${id}`);
  }

  create(data) {
    return http.post("/videos", data);
  }

  update(id, data) {
    return http.put(`/videos/${id}`, data);
  }

  delete(id) {
    return http.delete(`/videos/${id}`);
  }

  deleteAll() {
    return http.delete(`/videos`);
  }

  findByTitle(title) {
    return http.get(`/videos?title=${title}`);
  } */
}

export default new VideoDataService();