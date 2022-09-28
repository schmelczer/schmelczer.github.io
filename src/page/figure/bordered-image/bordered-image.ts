import { ResponsiveImage } from '../../../types/responsive-image';
import { ImageViewer } from '../../image-viewer/image-viewer';
import { Image } from '../../image/image.html';
import { Figure } from '../figure';
import './bordered-image.scss';

export class BorderedImage extends Figure {
  public constructor(
    options: {
      image: ResponsiveImage;
      alt: string;
      sizes?: string | null;
      isEagerLoaded?: boolean;
    },
    public imageViewer?: ImageViewer
  ) {
    super(Image(options));
  }

  protected async onClick() {
    this.imageViewer?.showImage(this.query('img') as HTMLImageElement);
  }
}
