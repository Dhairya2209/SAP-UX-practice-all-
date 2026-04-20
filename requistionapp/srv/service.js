// const cds = require('@sap/cds')

// module.exports = cds.service.impl(async function () {
//   const { Requisitions } = this.entities

//   this.before('CREATE', Requisitions, req => {
//     const d = req.data

//     if (!d.title) req.reject(400, 'Title is required')
//     if (!d.amount || d.amount <= 0) req.reject(400, 'Amount must be greater than 0')

//     d.status = 'SUBMITTED'
//     d.requester = req.user.id || 'anonymous'
//   })

//   this.before('UPDATE', Requisitions, req => {
//     if (req.data.status && ['APPROVED', 'REJECTED'].includes(req.data.status)) {
//       req.reject(400, 'Status can only be changed using approve/reject actions')
//     }
//   })

//   this.on('approve', async req => {
//     const { ID, comments } = req.data
//     const item = await SELECT.one.from(Requisitions).where({ ID })
//     if (!item) req.reject(404, 'Requisition not found')
//     if (item.status === 'APPROVED') req.reject(400, 'Already approved')
//     if (item.status === 'REJECTED') req.reject(400, 'Already rejected')

//     await UPDATE(Requisitions).set({
//       status: 'APPROVED',
//       approver: req.user.id,
//       comments
//     }).where({ ID })

//     return 'Requisition approved'
//   })

//   this.on('rejectRequest', async req => {
//     const { ID, comments } = req.data
//     const item = await SELECT.one.from(Requisitions).where({ ID })
//     if (!item) req.reject(404, 'Requisition not found')
//     if (item.status === 'APPROVED') req.reject(400, 'Already approved')
//     if (item.status === 'REJECTED') req.reject(400, 'Already rejected')

//     await UPDATE(Requisitions).set({
//       status: 'REJECTED',
//       approver: req.user.id,
//       comments
//     }).where({ ID })

//     return 'Requisition rejected'
//   })
// })

const cds = require('@sap/cds')

module.exports = cds.service.impl(async function () {
  const { Requisitions } = this.entities

  // 🔹 Before CREATE
  this.before('CREATE', Requisitions, req => {
    const d = req.data

    if (!d.title) req.reject(400, 'Title is required')
    if (!d.amount || d.amount <= 0) req.reject(400, 'Amount must be greater than 0')

    d.status = 'SUBMITTED'
    d.requester = req.user.id || 'anonymous'
  })

  // 🔹 Before UPDATE
  this.before('UPDATE', Requisitions, req => {
    if (req.data.status && ['APPROVED', 'REJECTED'].includes(req.data.status)) {
      req.reject(400, 'Status can only be changed using approve/reject actions')
    }
  })

  // 🔹 Approve Action
  this.on('approve', async req => {
    const { ID } = req.params[0]        // ✅ correct way to get ID
    const { comments } = req.data       // ✅ payload

    const item = await SELECT.one.from(Requisitions).where({ ID })
    if (!item) req.reject(404, 'Requisition not found')

    if (item.status === 'APPROVED') req.reject(400, 'Already approved')
    if (item.status === 'REJECTED') req.reject(400, 'Already rejected')

    await UPDATE(Requisitions).set({
      status: 'APPROVED',
      approver: req.user.id,
      comments: comments
    }).where({ ID })

    return 'Requisition approved successfully'
  })

  // 🔹 Reject Action
  this.on('rejectRequest', async req => {
    const { ID } = req.params[0]
    const { comments } = req.data

    const item = await SELECT.one.from(Requisitions).where({ ID })
    if (!item) req.reject(404, 'Requisition not found')

    if (item.status === 'APPROVED') req.reject(400, 'Already approved')
    if (item.status === 'REJECTED') req.reject(400, 'Already rejected')

    await UPDATE(Requisitions).set({
      status: 'REJECTED',
      approver: req.user.id,
      comments: comments
    }).where({ ID })

    return 'Requisition rejected successfully'
  })
})