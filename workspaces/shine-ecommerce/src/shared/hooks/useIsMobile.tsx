import { useEffect, useState } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };

    // Verificar o tamanho da janela quando a página é carregada e quando a janela é redimensionada
    handleResize();
    window.addEventListener('resize', handleResize);

    // Limpar o listener do evento quando o componente é desmontado
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

export default useIsMobile;
