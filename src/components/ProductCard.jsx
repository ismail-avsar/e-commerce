import { Link } from 'react-router-dom';

const ProductCard = ({ productId, image, title, category, originalPrice, salePrice }) => {
    return (
        <Link to={`/product/${productId || 1}`} className="flex flex-col bg-white group">
            {/* Ürün Görseli */}
            <div className="w-full h-[427px] overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Ürün Bilgileri */}
            <div className="flex flex-col items-center py-6 px-6 gap-2.5">
                {/* Başlık */}
                <h5 className="text-base font-bold text-primary-dark text-center">
                    {title}
                </h5>

                {/* Kategori */}
                <p className="text-sm font-bold text-text-gray text-center">
                    {category}
                </p>

                {/* Fiyatlar */}
                <div className="flex items-center gap-1.5 py-1">
                    <span className="text-base font-bold text-muted line-through">
                        ${originalPrice}
                    </span>
                    <span className="text-base font-bold text-brand-green">
                        ${salePrice}
                    </span>
                </div>

                {/* Renk Seçenekleri */}
                <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-full bg-brand-blue"></div>
                    <div className="w-4 h-4 rounded-full bg-brand-green"></div>
                    <div className="w-4 h-4 rounded-full bg-[#E77C40]"></div>
                    <div className="w-4 h-4 rounded-full bg-primary-dark"></div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;