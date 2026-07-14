Modal for focused tasks — create/edit forms and destructive confirmations. Matches the app's Radix dialog: ink overlay at 25% + 2px blur, white card, `rounded-md`, 24px padding, close X top-right.

```jsx
<Dialog open={open} onClose={() => setOpen(false)}>
  <DialogHeader>
    <DialogTitle>Create epic</DialogTitle>
    <DialogDescription>Group related features under one outcome.</DialogDescription>
  </DialogHeader>
  <Input placeholder="Epic name" />
  <DialogFooter>
    <Button variant="secondary" onClick={close}>Cancel</Button>
    <Button>Create epic</Button>
  </DialogFooter>
</Dialog>
```

For destructive confirms, use a `destructive` Button in the footer. Keep one primary action per dialog. Width defaults to 512px (`max-w-lg`).
