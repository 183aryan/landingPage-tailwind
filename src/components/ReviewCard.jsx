import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="rounded-[20px] shadow-3xl bg-white flex flex-col justify-center items-center">
      <img src={imgURL} 
      alt="customer" 
      className="relative -top-11 rounded-full w-[120px] h-[120px]" />
      <p className="max-w-sm info-text text-center">{feedback}</p>
      <div className="mt-3 flex gap-3 justify-center items-center">
        <img src={star} 
        alt="rating star"
        className="object-contain m-0" />
        <p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
      </div>
      <h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
