import axios from 'axios';
import {API_URL} from '../Config/Constants';

class HttpClient {
  api_url: string;
  alert_api_url: string;
  user_api_url: string;

  constructor() {
    this.api_url = API_URL;
  }

  generateHeaders(customHeaders?: any) {
    return {
      headers: {
        ...customHeaders,
      },
    };
  }

  async request(
    endpoint: string,
    method: string,
    body: any,
    customHeaders: any,
    customUrl?: any,
  ) {
    switch (method) {
      case 'GET':
        return await axios.get(
          (customUrl ? customUrl : this.api_url) + endpoint,
          this.generateHeaders(customHeaders),
        );
      case 'POST':
        return await axios.post(
          (customUrl ? customUrl : this.api_url) + endpoint,
          body,
          this.generateHeaders(customHeaders),
        );
      case 'PUT':
        return await axios.put(
          (customUrl ? customUrl : this.api_url) + endpoint,
          body,
          this.generateHeaders(customHeaders),
        );
      case 'DELETE':
        return await axios.delete(
          (customUrl ? customUrl : this.api_url) + endpoint,
          {data: body, ...this.generateHeaders(customHeaders)},
        );
    }
  }
}

export default new HttpClient();
