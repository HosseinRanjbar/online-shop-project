import Button from '../../Button/Button';
import withProps from '../hoc/withProps';

const AddToCartButton = withProps(({ showAddToCart }: any) => {

    console.log(showAddToCart, "showAddToCart");

    return (
        showAddToCart &&
        <Button>
            AddToCartButton
        </Button>
    )
})

export default AddToCartButton