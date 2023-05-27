import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./globalStore";

// 이렇게 해두면 typed useDispatch, useSelector 쓸 수 있다고 하는데..
// 왜그런지는 정확히 모르겠음
// dispatch는 globalStore.ts에서 정의한거 때문에 type 추론 가능한거 같고
// selector는 TypedUseSelectorHook 이 라이브러리 덕분인듯!?
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector