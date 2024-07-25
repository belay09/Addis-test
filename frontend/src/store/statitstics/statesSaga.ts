import { call, put, takeLatest } from "redux-saga/effects";
import { fetchStatisticsFailure, fetchStatisticsSuccess } from "./stateSlice";
import axios from "axios";

function* fetchStatisticsHandler() {
  try {
    const apiUrl = `https://addis-test-mhhr.onrender.com/api/v1/analytics`;
    const { data } = yield call(axios.get, apiUrl);
    yield put(fetchStatisticsSuccess(data));
  } catch (error: any) {
    yield put(fetchStatisticsFailure(String(error.message)));
  }
}

function* fetchStatisticsSaga() {
  yield takeLatest("statistics/startFetchStatistics", fetchStatisticsHandler);
}

export { fetchStatisticsSaga };
