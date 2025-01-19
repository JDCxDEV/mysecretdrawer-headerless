const middleware = {
  // Authentication Middleware
  auth({ store, redirect }) {
    if (!store.state.authenticated) {
      return redirect("/login");
    }
  },

  // Logging Middleware
  logger({ route }) {
    console.log(`[Middleware] Accessing: ${route.path}`);
  },
};

export default middleware;
