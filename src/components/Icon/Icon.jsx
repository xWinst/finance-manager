const Icon = ({ href, width, height, className }) => {
    return (
        <svg className={className} width={width} height={height}>
            <use href={href} />
        </svg>
    );
};

export default Icon;
