import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
    IconButton,
} from "@material-tailwind/react";
import {
    BanknotesIcon,
    StarIcon,
    HeartIcon,
} from "@heroicons/react/24/solid";
import { Link } from 'react-router-dom'

export default function Cards() {
    return (
        <Link to='/producePage'>
            <Card className="w-full max-w-[26rem] shadow-lg" >
                <CardHeader floated={false} color="blue-gray">
                    <img
                        src="https://www.foodnavigator-usa.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator-usa.com/article/2019/03/27/merchandising-fresh-produce-shoppers-seek-more-snack-sized-and-local-options/9303073-1-eng-GB/Merchandising-fresh-produce-Shoppers-seek-more-snack-sized-and-local-options.jpg"
                        alt="ui/ux review check"
                    />
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    <IconButton
                        size="sm"
                        color="red"
                        variant="text"
                        className="!absolute top-4 right-4 rounded-full"
                    >
                        <HeartIcon className="h-6 w-6" />
                    </IconButton>
                </CardHeader>
                <CardBody>
                    <div className="mb-3 flex items-center justify-between">
                        <Typography variant="h5" color="blue-gray" className="font-medium">
                            Wooden House, Florida
                        </Typography>
                        <Typography
                            color="blue-gray"
                            className="flex items-center gap-1.5 font-normal"
                        >
                            <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
                            5.0
                        </Typography>
                    </div>
                    <Typography color="gray">
                        Enter a freshly updated and thoughtfully furnished peaceful home
                        surrounded by ancient trees, stone walls, and open meadows.
                    </Typography>

                </CardBody>
            </Card>
        </Link>
    );
}