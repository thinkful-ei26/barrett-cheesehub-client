import { API_BASE_URL } from '../config';

export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
export const fetchCheesesRequest = () => ({
    type: FETCH_CHEESES_REQUEST
});

export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
export const fetchCheesesSuccess = cheeses => ({
    type: FETCH_CHEESES_SUCCESS,
    cheeses
});

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
export const fetchCheesesError = error => ({
    type: FETCH_CHEESES_ERROR,
    error
});

// async action: dispatches async request, handles success or err actions
export const fetchCheeses = () => dispatch => {
    dispatch(fetchCheesesRequest());
    return fetch(`${API_BASE_URL}/api/mockdata`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        }).then(cheeses => dispatch(fetchCheesesSuccess(cheeses))
        ).catch(err => dispatch(fetchCheesesError(err))
        );
}
