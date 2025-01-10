const List = ({ className, listItems, imageClassName }) => {
    return (
        <ul className={`${className}`}>
            {listItems.map((listItem) => (
                <li
                    key={listItem.id}
                    className="flex flex-wrap w-32 items-center border border-black bg-slate-500 rounded-md p-4 pt-2 mr-4 hover:bg-gray-700"
                >
                    <img
                        className={`${imageClassName} `}
                        src={listItem.image}
                        alt=""
                    />
                    <p className="text-sm font-medium text-white text-left">
                        {listItem.titleText}
                    </p>
                    <p className="text-sm text-wrap text-gray-300 text-left">
                        {listItem.subTitleText}
                    </p>
                </li>
            ))}
        </ul>
    );
};

export default List;
