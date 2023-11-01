import { Button, Icon, Item, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activty";
import { Link } from "react-router-dom";
import { useState, SyntheticEvent } from "react";
import { format } from "date-fns";

interface Props {
  activity: Activity;
}

export default function ActivityListItem({ activity }: Props) {
  const [target, setTarget] = useState("");

  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src="/assets/user.png" />
            <Item.Content>
              <Item.Header as={Link} to={`/activities/${activity.id}`}>
                {activity.title}
              </Item.Header>
              <Item.Description>Hosted by Username</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" />
          {format(activity.date!, "MMM d, yyyy h:mm aa")}
          <Icon name="marker" />
          {activity.venue}
        </span>
      </Segment>
      <Segment secondary>Attendees go here</Segment>
      <Segment clearing>
        <span>{activity.description}</span>
        <Button
          as={Link}
          to={`/activities/${activity.id}`}
          color="teal"
          floated="right"
          content="View"
        />
      </Segment>
    </Segment.Group>
  );
}
