import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";



export default function ProductRegistration() {
    return (
        <div className = "product">
            <Card color="transparent" shadow={false} className="scale-5">
                <Typography variant="h4" color="blue-gray">
                    Create a Listing
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Enter your details of product.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-4 flex flex-col gap-6">
                        <Input size="lg" label="Name" />
                        <Input size="lg" label="Price" type="number" />
                        <Input size="lg" label="Class" />
                    </div>
                    <Checkbox
                        label={
                            <Typography
                                variant="small"
                                color="gray"
                                className="flex items-center font-normal"
                            >
                                I agree the
                                <a
                                    href="#"
                                    className="font-medium transition-colors hover:text-blue-500"
                                >
                                    &nbsp;Terms and Conditions
                                </a>
                            </Typography>
                        }
                        containerProps={{ className: "-ml-2.5" }}
                    />
                    <Button className="mt-6" fullWidth>
                        Create
                    </Button>

                </form>
            </Card>
        </div>
    );
}