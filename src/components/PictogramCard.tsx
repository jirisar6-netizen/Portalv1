import React from 'react';
import { motion } from 'motion/react';
import { getSymbolImageUrl } from '../services/arasaac';
import { Symbol } from '../types';

interface PictogramCardProps {
  symbol: Symbol;
  onClick?: (symbol: Symbol) => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const PictogramCard: React.FC<PictogramCardProps> = ({ 
  symbol, 
  onClick, 
  className = '',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'w-24 h-24 text-xs',
    md: 'w-32 h-32 text-sm',
    lg: 'w-40 h-40 text-base'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick?.(symbol)}
      className={`card-piktos ${sizeClasses[size]} ${className}`}
    >
      <div className="flex-1 flex items-center justify-center w-full overflow-hidden">
        <img 
          src={getSymbolImageUrl(symbol._id)} 
          alt={symbol.word}
          className="max-w-full max-h-full object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
      <span className="font-bold text-center uppercase tracking-tight truncate w-full">
        {symbol.word}
      </span>
    </motion.div>
  );
};
