import http from './httpService';

const apiEndpoint = '/chats';

function chatUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getChats() {
  return http.get(apiEndpoint);
}

export function getChat(obj) {
    return http.post(apiEndpoint + '/getchat', obj);
  }


export function saveChat(chat) {
  if (chat._id) {
    const body = { ...chat };
    delete body._id;
    return http.put(chatUrl(chat._id), body);
  }

  return http.post(apiEndpoint, chat);
}

export function deleteLocation(id) {
  return http.delete(chatUrl(id));
}
