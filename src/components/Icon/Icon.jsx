const Icon = ({ href, width, height, className, onClick }) => {
    return (
        <svg className={className} width={width} height={height} onClick={onClick}>
            <use href={href} />
        </svg>
    );
};

export default Icon;
