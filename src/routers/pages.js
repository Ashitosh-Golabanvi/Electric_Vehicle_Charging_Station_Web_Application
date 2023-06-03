// Imports
const express = require('express')
const router = new express.Router()

const geocode = require ('../utils/geocode')

// Setting up the routing for different pages.
router.get('', (req, res) => {
    res.render('index', {
        title: 'EVCSSP'
    })
})

router.get('/index', (req, res) => {
    res.render('index', {
        title: 'EVCSSP'
    })
})

router.get('/profile_details', (req, res) => {
    res.render('profile_details', {
        title: 'EVCSSP - Your Profile'
    })
})

router.get('/change_password', (req, res) => {
    res.render('change_password', {
        title: 'EVCSSP - Change Password'
    })
})

router.get('/charger_dashboard', (req, res) => {
    res.render('charger_dashboard', {
        title: 'EVCSSP - Charger Dashboard'
    })
})

router.get('/charger_requests', (req, res) => {
    res.render('charger_requests', {
        title: 'EVCSSP - Charger Requests'
    })
})

router.get('/charger_bookings', (req, res) => {
    res.render('charger_bookings', {
        title: 'EVCSSP - Charger Bookings'
    })
})

router.get('/charger_reviews', (req, res) => {
    res.render('charger_reviews', {
        title: 'EVCSSP - Charger Reviews'
    })
})

router.get('/charger_history', (req, res) => {
    res.render('charger_history', {
        title: 'EVCSSP - Charger History'
    })
})

router.get('/user_bookings', (req, res) => {
    res.render('user_bookings', {
        title: 'EVCSSP - User Bookings'
    })
})

router.get('/user_payments', (req, res) => {
    res.render('user_payments', {
        title: 'EVCSSP - User Payments'
    })
})

router.get('/user_feedback', (req, res) => {
    res.render('user_feedback', {
        title: 'EVCSSP - User Feedback'
    })
})

router.get('/user_history', (req, res) => {
    res.render('user_history', {
        title: 'EVCSSP - User History'
    })
})

router.get('/wallet', (req, res) => {
    res.render('wallet', {
        title: 'EVCSSP - Your Wallet'
    })
})

router.get('/recharge', (req, res) => {
    res.render('recharge', {
        title: 'EVCSSP - Recharge'
    })
})

router.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'EVCSSP - Contact Us'
    })
})

router.get('/notification', (req, res) => {
    res.render('notification', {
        title: 'EVCSSP - Notifications'
    })
})

router.get('/about', (req, res) => {
    res.render('about', {
        title: 'EVCSSP - About Us'
    })
})

router.get('/map', (req, res) => {
    res.render('map', {
        title: 'EVCSSP - Map'
    })
})

router.get('/privacy', (req, res) => {
    res.render('privacy', {
        title: 'EVCSSP - Privacy Policy'
    })
})

router.get('/disclaimer', (req, res) => {
    res.render('disclaimer', {
        title: 'EVCSSP - Disclaimer'
    })
})

router.get('/terms', (req, res) => {
    res.render('terms', {
        title: 'EVCSSP - Terms of Service'
    })
})

router.get('/faq', (req, res) => {
    res.render('faq', {
        title: 'EVCSSP - FAQ'
    })
})

// Demonstrates a use for local API modules and how to get data from call back functions.
router.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    // Added = {} to give it a default object so the app doesn't crash when there is an error.
    geocode(decodeURIComponent(req.query.address), (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})

// Demonstrates a use for local API modules and how to get data from call back functions.
router.get('/address', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    // Added = {} to give it a default object so the app doesn't crash when there is an error.
    geocode(decodeURIComponent(req.query.address), (error, { latitude, longitude } = {}) => {
        if (error) {
            return res.send({ error })
        }

        res.send({
            address: req.query.address,
            coordinates: [latitude, longitude]
        })
    })
})

// Handles 404 not found.
router.get('*', (req, res) => {
    res.render('404', {
        title: 'EVCSSP - 404 Page Not Found',
        name: '',
        errorMessage: 'Page not found.'
    })
})

module.exports = router