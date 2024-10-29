
from rest_framework.test import APITestCase
from rest_framework import status
from .models import Ticket


class TicketTests(APITestCase):
    def setUp(self):
        self.ticket_data = {
            'title': 'Test Ticket',
            'description': 'Test Description',
        }
        self.ticket = Ticket.objects.create(**self.ticket_data)

    def test_create_ticket(self):
        response = self.client.post('/test/tickets/', self.ticket_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Ticket.objects.count(), 2)
        self.assertEqual(response.data['title'], 'Test Ticket')

    def test_list_tickets(self):
        response = self.client.get('/test/tickets/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_resolve_ticket(self):
        response = self.client.patch(f'/test/tickets/{self.ticket.id}/resolve/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['status'], 'RESOLVED')

    def test_delete_ticket(self):
        response = self.client.delete(f'/test/tickets/{self.ticket.id}/')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Ticket.objects.count(), 0)
