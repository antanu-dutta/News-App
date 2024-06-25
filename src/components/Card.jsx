import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  Button,
} from "@material-tailwind/react";

export function BlogCard(props) {
  const defaultImage =
    "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const { image, title, description, author, date, url } = props;

  return (
    <Card className="max-w-[24rem] overflow-hidden ">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src={!image ? defaultImage : image}
          className="h-[200px] w-full object-cover"
          alt="ui/ux review check"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" className="text-lg" color="blue-gray">
          {title}
        </Typography>
        <Typography
          variant="lead"
          color="gray"
          className="mt-3 text-xl font-normal"
        >
          {description}
        </Typography>
        <span className="block my-3 ">
          Author :{" "}
          <span className="text-indigo-900">{author ? author : "unknown"}</span>{" "}
        </span>
        <span className="block mb-3">
          Posted on : <span>{new Date(date).toLocaleDateString()}</span>
        </span>
        <a href={url} target="_blank">
          <Button color="purple">Read More</Button>
        </a>
      </CardBody>
    </Card>
  );
}
