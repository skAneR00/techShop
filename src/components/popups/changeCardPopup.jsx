import { useSelector, useDispatch } from "react-redux";
import { setActiveCard } from "../../store/setactiveUserSlice/setActiveUserSlice";


export default function ChangeCardPopup({ showPopup }) {

    const user = useSelector((state) => state.activeUser.activeUser);

    const saveActiveCard = (item) => {
        dispatch(setActiveCard(item));
        showPopup();
    }

    const dispatch = useDispatch();

    return (
        <div className="absolute w-full h-full bg-slate-300 opacity-90 flex items-center justify-center z-10">
            <div className="flex flex-col p-5 md:w-1/3 w-4/5 bg-white rounded-xl gap-3">
                <h4 className="font-bold text-ui-dark text-2xl">Select Card: </h4>
                {
                    user.paymentMethods.map((item) => (
                        <div className="flex items-center justify-between px-2 border-b-2 border-ui-placeholder" key={user.paymentMethods.indexOf(item)}>
                            <div className="flex flex-col gap-1">
                                <p>{item.cardName}</p>
                                <p>{item.cardNum}</p>
                            </div>
                            <button className="flex md:px-6 px-3 md:py-2 py-1 rounded-xl border border-ui-dark gap-2" onClick={() => saveActiveCard(user.paymentMethods.indexOf(item))}> Select </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}