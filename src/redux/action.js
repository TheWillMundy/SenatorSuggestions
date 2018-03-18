/* eslint-disable */

// let url = 'https://api.airtable.com/v0/app2Izs0MJz2rXVF4/Discussions?view=Grid%20view';
const url = 'https://api.airtable.com/v0/app2Izs0MJz2rXVF4';

// Resource for Fetch
export const resource = (method, endpoint, payload) => {
  // console.log("THE ENDPOINT: " + endpoint + "\n" + "THE PAYLOAD: " +
  // payload + "\n" + "THE METHOD: " + method)
  const options = {
    method,
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer keygH6FHj3vyg2mFy'
    }
  };
  if (payload) options.body = JSON.stringify(payload);

  // console.log('The options for ', endpoint, options)
  let tempUrl = url
  if (endpoint != undefined) {
    tempUrl = `${url}/${endpoint}`
  }
  // console.log('The url: ',`${tempUrl}`)
  return fetch(`${tempUrl}`, options)
    .then((r) => {
      if (r.status === 200) {
        return (r.headers.get('Content-Type').indexOf('json') > 0) ? r.json() : r.text();
      }
      return r.text();
      // else {
      //   // useful for debugging, but remove in production
      //   console.error(`${method} ${endpoint} ${r.statusText}`);
      //   throw new Error(r.statusText)
      // }
    })
    .catch(err => console.error(err));
};

export const getDiscussions = () => {
  return (dispatch) => {
    resource('GET', 'Discussions?view=Grid%20view').then((obj) => {
      const discussions = obj.records;
      return dispatch({
        type: "GET_DISCUSSIONS",
        discussions
      });
    });
  }
};

export const sendUpvote = (discussion) => {
  const payload = {
    "fields": {
      "Upvotes": discussion.fields.Upvotes + 1
    }
  };
  return (dispatch) => {
    resource('PATCH', 'Discussions/'+discussion.id, payload).then((newDiscussion) => {
      return dispatch({
        type: "SEND_UPVOTE",
        newDiscussion
      });
    });
  }
};

export const createDiscussion = (suggestion) => {
  const payload = {
    "fields": {
      "Suggestion": suggestion,
      "Upvotes": 1
    }
  };
  return (dispatch) => {
    resource('POST', 'Discussions', payload).then((newDiscussion) => {
      return dispatch({
        type: "CREATE_DISCUSSION",
        newDiscussion
      })
    })
  }
}

export const changeView = (view) => {
  return (dispatch) => {
    return dispatch({
      type: "CHANGE_VIEW",
      view
    })
  }
}
