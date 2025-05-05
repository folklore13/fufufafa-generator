import Fufufafa from '../assets/fufufafa.jpg';

export default function Profile(){
    return(
        <div className="flex items-center gap-x-4">
            <div>
                <img className="rounded-full" width={40} src={Fufufafa} alt="Fufufafa's Profile" />
            </div>
            <div className="flex flex-col text-left">
                <p className="text-lg text-black">fufufafa</p>
                <p className="text-lg text-gray-300">29-05-2024 10:10</p>
            </div>
        </div>
    );
}