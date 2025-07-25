import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardAction
} from '@/components/ui/card'

export default function Estimation() {
  return (
    <div className="w-1/2">
      <div className="bg-white m-2 p-2 rounded-xl border shadow-sm">
        {/* <h2 className="p-2 font-bold">Predicted Demand</h2> */}
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction>Card Action</CardAction>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}