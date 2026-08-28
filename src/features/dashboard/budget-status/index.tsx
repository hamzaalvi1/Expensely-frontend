import { Stack } from '@mantine/core'
import SectionCard from '../../../components/section-card'
import BudgetProgressBar from '../budget-progress-bar'

const BudgetStatus = () => {
  return (
    <SectionCard title="dashboard.budget-status.title">
        <Stack gap="md" pt='sm'>
            <BudgetProgressBar
                title="Food & Drink"
                outOf="100"
                totalValue="50"
                progressProps={{ color: 'warning.4' }}
            />
            <BudgetProgressBar
                title="Housing"
                outOf="1000"
                totalValue="100"
                progressProps={{ color: 'success.6' }}
            />
            <BudgetProgressBar
                title="Transportation"
                outOf="100"
                totalValue="100"
                progressProps={{ color: 'danger.6' }}
            />
            <BudgetProgressBar
                title="Entertainment"
                outOf="1200"
                totalValue="1000"
                progressProps={{ color: 'info.6' }}
            />
        </Stack>
    </SectionCard>
  )
}

export default BudgetStatus