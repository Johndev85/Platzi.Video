function buildMessage(entity, action) {
    if (action === 'list') {
        return `${entity} ${action}ed`
    }

    return `${entity} ${action}d`
}

module.exports = buildMessage