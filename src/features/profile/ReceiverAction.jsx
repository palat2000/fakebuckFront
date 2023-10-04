import ActionButton from "./ActionButton";

function ReceiverAction() {
  return (
    <div className="flex gap-2">
      <ActionButton>Accept</ActionButton>
      <ActionButton>Reject</ActionButton>
    </div>
  );
}

export default ReceiverAction;
