import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardAction
} from '@/components/ui/card'

type InsightProps = {
  title: string,
  desc: string,
  child: string[]
}
// const Insight = ({ title, desc, child }: InsightProps): JSX.Element => {
const Insight: React.FC<InsightProps> = ({ title, desc, child }) => {
  return (
    <div className="w-full">
      <div className="m-2 p-2 rounded-xl border shadow-sm">
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

export default Insight